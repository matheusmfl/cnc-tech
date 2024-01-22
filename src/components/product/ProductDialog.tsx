import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { ProductForm } from './ProductForm'

export function ProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-[4px] px-6 py-4 text-center bg-[#1F2A68] font-roboto text-lg font-medium text-white">
          Falar com representante
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="md:text-2xl">Contato</DialogTitle>
          <DialogDescription className="text-left md:text-lg">
            Encontraremos o melhor representante para lhe atender, informe seus
            dados que retornaremos o mais breve possível.
          </DialogDescription>
        </DialogHeader>

        {/* Form de envio */}
        <ProductForm />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
