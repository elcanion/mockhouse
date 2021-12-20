import { Text } from "@chakra-ui/react";

export const Copyright = (props) => (
    <Text
        fontSize={"sm"} {...props}
        >
        &copy; {new Date().getFullYear()} SI Soluções Imobiliárias.
    </Text>
)