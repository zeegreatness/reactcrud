const yr = new Date().getFullYear();

const Footer = (props) => {
    return(
        <div>
            <br/>
            <div className={"bottom section-padding"} style={{background: "#78e08f"}}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-12 text-center"}>
                            <div className={"copyright"}>
                                <p>© <span> {yr} </span> <a href="#" className={"transition"}>{props.owner}</a> All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer