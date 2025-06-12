import style from "./Navbar.module.scss"
import img1 from "../../assets/logo.svg"
import NomesDasClasses from "classnames"
import {RiShoppingCart2Line,RiShoppingCartFill} from"react-icons/ri"
import Busca from "../Busca"


const iconeProps={
    color:"white",
    size:24
}
export default function Navbar() {
    return (
        <nav className={style.nav}>
            <img src={img1} className={style.logo} />
            <div className={style.links}>
                <div>
                    <a href=" /" className={NomesDasClasses(style.link, {
                        [style.selected]: window.location.pathname === "/ "
                    })}>
                        Pagina Inicial</a>
                </div>
            </div>
            <div className={style.busca}>
                <Busca></Busca>
            </div>
            
            <div className={style.icones}>
                <a href="/carrinho">
                    {window.location.pathname==="/carrinho"
                    ?<RiShoppingCartFill {...iconeProps}/>
                    :<RiShoppingCart2Line {...iconeProps}/>
                }
                </a>
            </div>
        </nav>
    )
} 