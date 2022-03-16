import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import LogoBrio from '../../assets/logo_br-io_fundo-claro.png'
import LogoBrioDark from '../../assets/logo_br-io_fundo-escuro.png'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  isDarkMode: boolean
  handleDarkMode: Function
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
  isDarkMode,
  handleDarkMode,
}: Props) => {
  return (
    <div className="navbar flex sm:justify-center flex-col sm:flex-row select-none border-b-2 border-gray-300 dark:border-gray-600">
      <div className="navbar-content">
        <div className="sm:text-xl sm:mr-14 sm:pr-14 font-bold dark:text-white flex">
          <span className="title-font">Nomes&nbsp;</span> <span>-&nbsp;</span>
          <a
            href="https://brasil.io/home/"
            className="title-link-font text-blue-700 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-500 flex"
          >
            Brasil.io
            <img
              src={LogoBrio}
              alt="Logo Brasil.io"
              className="pl-2 dark:hidden"
              style={{ height: '22px' }}
            />
            <img
              src={LogoBrioDark}
              alt="Logo Brasil.io"
              className="pl-2 hidden dark:block"
              style={{ height: '22px' }}
            />
          </a>
        </div>

        <div className="right-icons">
          <InformationCircleIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          {isDarkMode ? (
            <SunIcon
              className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
              onClick={() => handleDarkMode(!isDarkMode)}
            />
          ) : (
            <MoonIcon
              className="h-6 w-6 mr-3 cursor-pointer"
              onClick={() => handleDarkMode(!isDarkMode)}
            />
          )}
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}
