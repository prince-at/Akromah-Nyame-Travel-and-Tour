import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    pages : string,
    selectedPage: string,
    setSelectedPage: (value: string) => void, 
}

const Link = ({pages,selectedPage,setSelectedPage,}: Props) => {
    const lowerCasePage = pages.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    hover:text-primary-300 transition duration-500`}
    href={`#${lowerCasePage}`}
    onClick={
        () => setSelectedPage(lowerCasePage)
    } >
        {pages}
    </AnchorLink>
  )
}

export default Link