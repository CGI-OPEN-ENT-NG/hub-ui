import ButtonBase from "@mui/material/ButtonBase";
import Input from "@mui/material/Input";
import { useTheme } from "@mui/material/styles";

const AnotherComponent = () => {
  const theme = useTheme();

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me from AnotherComponent
      </button>
      <ButtonBase style={{ backgroundColor: theme.palette.primary.main }}>
        AnotherComponent
      </ButtonBase>
      <Input className="bg-blue-500" />
    </div>
  );
};

export default AnotherComponent;
