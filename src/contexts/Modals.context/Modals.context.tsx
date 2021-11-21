import { HelpCase } from '@types';
import { createContext, ReactNode, useContext, useState } from 'react';

export type IModalsContext = {
  currentHelpCase: HelpCase;
  isHelpCaseDetailsModalOpen: boolean;
  openHelpCaseDetailsModal: (helpCase: HelpCase) => void;
  closeHelpCaseDetailsModal: () => void;
};

/**
 * @context Contexto de Modais
 */
export const ModalsContext = createContext({} as IModalsContext);

type ModalsContextProviderProps = {
  children: ReactNode;
};

/**
 * @contextProvider Provider do contexto de Modais
 */
export function ModalsContextProvider({ children }: ModalsContextProviderProps) {
  const [currentHelpCase, setCurrentHelpCase] = useState(null);
  const [isHelpCaseDetailsModalOpen, setIsHelpCaseDetailsModalOpen] = useState(false);

  const openHelpCaseDetailsModal = (helpCase: HelpCase) => {
    setCurrentHelpCase(helpCase);
    setIsHelpCaseDetailsModalOpen(true);
  };

  const closeHelpCaseDetailsModal = () => {
    setIsHelpCaseDetailsModalOpen(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        isHelpCaseDetailsModalOpen,
        currentHelpCase,
        openHelpCaseDetailsModal,
        closeHelpCaseDetailsModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

/**
 * @contextHook Hook para utilizar o contexto de Modais
 */
export const useModalsContext = () => useContext(ModalsContext);
