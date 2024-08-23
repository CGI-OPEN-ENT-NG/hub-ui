import { Box, Button, Chip, Collapse, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { ChipBox, paperStyle, seeMoreButtonStyle, wrapperBoxStyle } from "./style";
import { UserSelectionSectionComponent, UserSelectionSectionProps, UserSelectionSectionRef,User } from "./types";
import { defaultTranslations } from "./utils";
import { TextInput } from "../inputs";

export const UserSelectionSection: UserSelectionSectionComponent = forwardRef<
  UserSelectionSectionRef,
  UserSelectionSectionProps
>(({ users, selectedUsers, onUserSelectionChange, minSearchLength = 1,  translations = defaultTranslations ,chipVariantStyle ="filled",chipProps}, ref) => {
  const [search, setSearch] = useState<string>("");
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const initialVisibleCount  = 8;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const displaySeeMore = selectedUsers.length > initialVisibleCount;
  const chipBoxEmpty = selectedUsers.length === 0;

  useImperativeHandle(ref, () => ({
    closeList: () => setIsListOpen(false),
  }));

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase();
    const filtered = users.reduce((acc: User[], user) => {
      if (
        acc.length < 5 &&
        user.label.toLowerCase().includes(lowercaseSearch) &&
        !selectedUsers.some(selectedUser => selectedUser.id === user.id)
      ) {
        return [...acc, user];
      }
      return acc;
    }, []);
    setFilteredUsers(filtered);
  }, [search, users, selectedUsers]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    if (!isListOpen) setIsListOpen(true);
   
  };

  const handleItemSelect = (item: User) => {
    onUserSelectionChange([...selectedUsers, item]);
    setIsListOpen(false);
    setSearch("");
  };

  const handleItemRemove = (item: User) => {
    onUserSelectionChange(selectedUsers.filter(selectedItem => selectedItem.id !== item.id));
  };

  const handleIsScrollable = () => {
    setIsScrollable(!isScrollable);
    setVisibleCount(isScrollable ? initialVisibleCount : selectedUsers.length);
  }

  useEffect(() => {
    if (!displaySeeMore) setIsScrollable(false);  
      setVisibleCount(isScrollable ? selectedUsers.length :initialVisibleCount );
  }, [filteredUsers]);


  return (
      <Box sx={wrapperBoxStyle}>
      <Typography variant="h2">{translations.title}</Typography>
      <Box sx={{ width: "100%", position: "relative", maxWidth:"100%" }}>
        <TextInput
          name="search"
          placeholder={translations.searchPlaceholder}
          fullWidth
          value={search}
          onChange={handleChange}
        />
        {search.length >= minSearchLength && isListOpen && (
          <Paper sx={paperStyle}>
            {filteredUsers.length ? (
              <List>
                {filteredUsers.map(item => (
                  <ListItemButton key={item.id} onClick={() => handleItemSelect(item)}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            ) : (
              <Typography sx={{ padding: ".5rem" }} variant="body1">
                {translations.noResults}
              </Typography>
            )}
          </Paper>
        )}
      </Box>
      <ChipBox isEmpty={chipBoxEmpty} isScrollable={isScrollable && displaySeeMore}>
        {chipBoxEmpty ? (
          <Typography variant="body1">{translations.emptySelection}</Typography>
        ) : (
          selectedUsers.slice(0, visibleCount).map(item  => (
            <Chip
              key={item.id}
              label={item.label}
              onDelete={() => handleItemRemove(item)}
              sx={{ maxWidth: "20%", justifyContent:"space-betweeen" }}
              {...chipProps}
            />
          ))
        )}
      </ChipBox> 
      {selectedUsers.length > initialVisibleCount && (
        <Collapse in={displaySeeMore  && !isScrollable} collapsedSize={0}>
          <Button sx={seeMoreButtonStyle} data-testid="see-more" onClick={handleIsScrollable}>
            {translations.expandButton}
          </Button>      
        </Collapse>
      )}
      
    </Box>
  );
});

UserSelectionSection.displayName = "UserSelectionSection";
