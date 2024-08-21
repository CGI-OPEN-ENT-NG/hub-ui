import { Box, Button, TextInput, Typography } from "@cgi-learning-hub/ui";
import { Chip, Collapse, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { ChipBox, paperStyle, seeMoreButtonStyle, wrapperBoxStyle } from "./style";
import { UserSelectionSectionComponent, UserSelectionSectionProps, UserSelectionSectionRef,UsersAndGroups } from "./types";
import { defaultTranslations } from "./utils";

export const UserSelectionSection: UserSelectionSectionComponent = forwardRef<
  UserSelectionSectionRef,
  UserSelectionSectionProps
>(({ users, selectedUsers, onUserSelectionChange, minSearchLength = 1,  translations = defaultTranslations ,chipVariantStyle ="filled"}, ref) => {
  const [search, setSearch] = useState<string>("");
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<UsersAndGroups[]>([]);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
 
  const displaySeeMore = selectedUsers.length > 8;
  const chipBoxEmpty = selectedUsers.length === 0;

  useImperativeHandle(ref, () => ({
    closeList: () => setIsListOpen(false),
  }));

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase();
    const filtered = users.reduce((acc: UsersAndGroups[], user) => {
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

  const handleItemSelect = (item: UsersAndGroups) => {
    onUserSelectionChange([...selectedUsers, item]);
    setIsListOpen(false);
    setSearch("");
  };

  const handleItemRemove = (item: UsersAndGroups) => {
    onUserSelectionChange(selectedUsers.filter(selectedItem => selectedItem.id !== item.id));
  };

  const handleIsScrollable = () => setIsScrollable(true);

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
          selectedUsers.map(item => ( 
            <Chip
              color="primary"
              variant= {chipVariantStyle}
              key={item.id}
              label={item.label}
              onDelete={() => handleItemRemove(item)}
              sx={{ maxWidth: "20%", justifyContent:"space-betweeen" }}
              
            />
          ))
        )}
      </ChipBox>
      <Collapse in={displaySeeMore && !isScrollable} collapsedSize={0}>
        <Button sx={seeMoreButtonStyle} data-testid="see-more" onClick={handleIsScrollable}>
          {translations.expandButton}
        </Button>
      </Collapse>
    </Box>
  );
});

UserSelectionSection.displayName = "UserSelectionSection";