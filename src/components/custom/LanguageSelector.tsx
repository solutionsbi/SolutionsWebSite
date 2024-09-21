import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { FlagIcon } from 'react-flag-kit'
import { useTranslation } from 'react-i18next'

export function LanguageSelector() {
    const { i18n } = useTranslation()

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    return (
        <Select value={i18n.language} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pt-BR">
                    <div className="flex items-center">
                        <FlagIcon code="BR" size={16} className="mr-2" />
                        Português
                    </div>
                </SelectItem>
                <SelectItem value="en-US">
                    <div className="flex items-center">
                        <FlagIcon code="US" size={16} className="mr-2" />
                        English
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
