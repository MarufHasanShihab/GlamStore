import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const SideContext = createContext(null)
const SideProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const handleClose = ()=>{
        setOpen(false)
    } 
    const contextValue = {open, setOpen, handleClose}
    return (
        <SideContext.Provider value={contextValue}>
            {children}
        </SideContext.Provider>
    );
};

SideProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default SideProvider;