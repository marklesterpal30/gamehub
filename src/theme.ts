import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
