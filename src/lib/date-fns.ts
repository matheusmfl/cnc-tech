import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(dateString: string) {
  const parsedDate = parseISO(dateString)
  const formattedDate = format(parsedDate, "dd', 'MMMM yyyy", { locale: ptBR })

  return formattedDate
}
