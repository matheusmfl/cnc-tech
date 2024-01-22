'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'

const productSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().min(3),
  companyName: z.string().min(3).max(50).optional(),
  cnpj: z.string().min(3).optional(),
})

type ProductFormSchema = z.infer<typeof productSchema>

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormSchema>({
    resolver: zodResolver(productSchema),
  })

  function handleSubmitForm(data: ProductFormSchema) {
    console.log('Olá')
    if (Object.keys(errors).length > 0) {
      console.error('Erros de validação:', errors)
    }
    console.log({ data })
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="grid gap-4 py-4 items-start justify-start">
        <div className="grid grid-cols-4 items-center justify-start gap-4">
          <Label htmlFor="name" className="text-right">
            Nome <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register('name')}
            placeholder="Seu nome aqui"
            className="col-span-3"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Digite seu nome</span>
          )}
        </div>

        <div className="grid grid-cols-4 items-center justify-start gap-4">
          <Label htmlFor="email" className="text-right">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            {...register('email')}
            placeholder="Seu e-mail para contato"
            className="col-span-3"
          />
          {errors.name && (
            <span className="text-red-500">Digite seu e-mail</span>
          )}
        </div>

        <div className="grid grid-cols-4 items-center justify-start gap-4">
          <Label htmlFor="razao-social" className="text-right">
            Razão social
          </Label>
          <Input
            {...register('companyName')}
            placeholder="Nome da empresa"
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center justify-start gap-4">
          <Label htmlFor="cnpj" className="text-right">
            Cnpj
          </Label>
          <Input
            {...register('cnpj')}
            placeholder="CNPJ da empresa"
            className="col-span-3"
          />
          {errors.cnpj && (
            <span className="text-red-500 text-sm">
              {errors.cnpj.toString()}
            </span>
          )}
        </div>
      </div>

      <span className="text-xs">
        <span className="text-red-500">*</span> campos obrigatórios
      </span>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Enviar
      </button>
    </form>
  )
}
