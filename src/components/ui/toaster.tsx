"use client"

import { useToast } from "../../hooks/use-toast"
import { X } from "lucide-react"
import "./toaster.css"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="toaster">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.variant === "destructive" ? "toast-destructive" : "toast-default"}`}
        >
          <div className="toast-content">
            <div className="toast-title">{toast.title}</div>
            {toast.description && <div className="toast-description">{toast.description}</div>}
          </div>
          <button onClick={() => dismiss(toast.id)} className="toast-close" aria-label="Close">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
