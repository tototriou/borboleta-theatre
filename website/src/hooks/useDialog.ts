"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Hook pour gérer l'ouverture/fermeture d'une <dialog> HTML native.
 *
 * @param isOpen - true pour ouvrir la modale, false pour la fermer
 * @param onClose - callback appelé quand l'utilisateur ferme la modale (Echap, clic backdrop, bouton)
 * @returns ref à attacher à l'élément <dialog>
 *
 * @example
 * ```tsx
 * const dialogRef = useDialog(isOpen, onClose);
 * return <dialog ref={dialogRef} onClose={onClose}>...</dialog>;
 * ```
 */
export function useDialog(isOpen: boolean, onClose: () => void) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [handleClose]);

  return dialogRef;
}
