import "./Header.css";
import { Box } from "@chakra-ui/react";
type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
      width="10"
      height="10"
      fontSize="30px"
      fontWeight={500}
      margin
    >
      <img sizes="20x20" src="/rocket.png" alt="Rocket" />
      <h1 style={{ whiteSpace: "nowrap" }}>{title}</h1>
    </Box>
  );
};

export default Header;
