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
            <SelectTrigger>
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pt">
                    <div className="flex items-center gap-1">
                        <FlagIcon code="BR" size={24} className="mr-2" />
                        PT
                    </div>
                </SelectItem>
                <SelectItem value="en">
                    <div className="flex items-center gap-1">
                        <FlagIcon code="US" size={24} className="mr-2" />
                        ENG
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
