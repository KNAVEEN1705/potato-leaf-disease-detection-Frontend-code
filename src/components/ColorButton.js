
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { common } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#95d07b',
    },
  },
}))(Button);

export default ColorButton;
