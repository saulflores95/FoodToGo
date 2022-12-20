// import original module declarations
import "styled-components";
import { ThemeType } from "../infrastructure/theme";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    // extend the theme type definition
    borderRadius: string;
  }
}
