import React from "react";
import './Footer.css'
function Footer() {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col" style={{marginLeft:"8em"}}>
                        <h4>Sosyel Medya</h4>
                        <ul className="list-unstyled">
                            <li>MeloCofee</li>
                            <li>MeloCOfeee</li>
                            <li>CofeeMelo</li>
                        </ul>
                    </div>
                </div>
                {/*Column2*/}
                <div className="col" style={{marginLeft:"35em" , marginTop:"-7.5em" }}>
                    <h4>Misafir İlişkileri</h4>
                    <ul className="list-unstyled">
                        <li>Sıkça Sorulan Sorular</li>
                        <li>Bizden Haberler</li>
                        <li>İnsan İlişkileri</li>
                    </ul>
                </div>
            </div>
            {/*Column3*/}
            <div className ="col" style={{marginLeft:"67em" , marginTop:"-7.5em"}}>
                <h4>Hızlı Bağlantılar</h4>
                    <ul className="list-unstyled">
                        <li>Besin Değer Tablosu</li>
                        <li>Mağazalarımız</li>
                        <li>Bizimle İletişime Geçin</li>
                    </ul>
            </div>
            <hr/>
            <div className="row">
                <p className="col-sm" style={{marginLeft:"33em" , marginRight:"33em"}}>
                    &copy;{new Date().getFullYear()} Melo Cofee | All rights reserved | Terms of Service | Privacy
                </p>

            </div>
        
        </div>
    )
    
}
export default Footer;