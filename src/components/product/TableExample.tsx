import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Specification {
  _type: string
  _key: string
  value: string
  key: string
}

interface Props {
  specifications: Specification[]
}

export function TableDemo({ specifications }: Props) {
  return (
    <Table>
      <TableCaption>
        Caso não ache a especificação que busca, entre em contato conosco
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Especificações</TableHead>
          <TableHead className="w-full">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specifications.map((specification) => (
          <TableRow key={specification._key}>
            <TableCell className="font-medium">{specification.key}</TableCell>
            <TableCell>{specification.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  )
}
