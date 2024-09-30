/**
 * LanguageSelector Component
 *
 * This component provides a dropdown menu for selecting the application's language.
 * It uses the react-i18next library for internationalization and the react-flag-kit for displaying country flags.
 *
 * Functionality:
 * - Displays the current language selection
 * - Allows users to switch between available languages (currently Portuguese and English)
 * - Updates the application's language using i18n when a new language is selected
 *
 * How it works:
 * 1. It uses the useTranslation hook from react-i18next to access the i18n object
 * 2. The Select component from @/components/ui/select is used to create the dropdown
 * 3. Each language option is represented by a SelectItem with a flag icon and language code
 * 4. When a new language is selected, the changeLanguage function is called, which updates the app's language
 *
 * Example usage:
 * <LanguageSelector />
 *
 * This will render a dropdown where users can switch between PT (Portuguese) and ENG (English),
 * with the respective country flags displayed next to each option.
 */

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
