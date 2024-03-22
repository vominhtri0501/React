import { memo } from "react"
import "./style.scss"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <AiFillMail />
                                20130446@st.hcmuaf.edu.vn
                            </li>
                            <li>
                                <AiFillPhone />
                                SĐT: 0978903360
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <BsFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BsInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BsGoogle />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUserAdd />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);