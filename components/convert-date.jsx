import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function ConvertDate({dateISO}){
    return (
        <time dateTime={dateISO}>
            {format(parseISO(dateISO), 'yyy年 MM月 dd日',{
                locale: ja,
            })}
        </time>
    )
}