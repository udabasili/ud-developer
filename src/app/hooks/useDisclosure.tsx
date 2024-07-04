import React, { useCallback } from 'react';

export const useDisclosure = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const open = useCallback(() => { setIsOpen(true) }, [])
    const close = useCallback(() => { setIsOpen(false) }, [])
    const toggle = useCallback(() => { setIsOpen(!open) }, [])

    return { isOpen, open, close, toggle } as const;
};