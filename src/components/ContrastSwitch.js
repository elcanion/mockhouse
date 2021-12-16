import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

/* Alteração para fazer: ao invés o controle afetar o colorMode, o controle deve afetar o tema */

export const ContrastSwitch = () => {
    const { contrastMode, toggleContrastMode } = useColorMode()

    return (
        <Button
        aria-label={contrastMode === 'low' ? 'Contraste alto' : 'Contraste baixo'}
        fontSize={'sm'}
        onClick={toggleContrastMode}
        leftIcon={contrastMode === 'low' ? <AddIcon /> : <MinusIcon />}
    >
        {contrastMode === 'low' ? 'Contraste alto' : 'Contraste baixo'}
        </Button>
    )
}