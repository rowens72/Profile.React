// import BadgeData from '../Data/badges.json'

const verify = {    
        boxSizing: "content-box",  alignItems: "center", justifyContent: "center", margin: "3.5rem", lineHeight: "3.25rem",
        fontSize: "14px", fontWeight: "bold", width: "48px", height: "16px", borderRadius: "4px", border: "solid 1px black",
        textDecoration: "none", padding: "6px 16px", color: "black", TextAlign: "center", alignSelf: "center",  
}

const badgeContainer = {    display: 'flex', flexDirection: 'Row', flexWrap: "wrap", marginTop: "-.5rem"}
const badgediv = {
    width: "200px", height: "320px",  border: '1px solid #000', margin: "1rem", justifyContent: "center", backgroundColor: "rgb(255, 255,255, 60%)"
}

const badgeImagediv = {
    margin:"1rem",  height: "155px", textAlign: "center"
}

const badgeConent = {
  marginRight:".5rem", width:"150px", textAlign:"center", lineHeight:"1", verticalAlign:"top", height: "40px", marginLeft: "20px"
}
const badgeAwardedto = { margin:".25rem", width:"145px", fontSize: "12px", fontStyle: "normal", fontStretch: "normal", height: "10px", marginLeft: "30px"}

const strong = {fontSize: "12px", fontWeight: "bold", fontStyle: "normal", fontStretch: "normal",  lineheight: "1.67", letterSpacing: "normal", textAlign: "left", color: "rgb(0, 0, 0)"}

function Badge() {
    return (
        <>
            <div style={{lineHeight: "10px", marginTop:"1rem"}}>
                <i style={{fontFamily: "'Roboto', sans-serif", fontSize: "12px", backgroundColor: 'RGB(255, 255, 255, 60%)'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Earned Badges while attending California State University, Long Beach Full Stack Development Bootcamp Program</b></i> 
            <div style={badgeContainer}>
                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://api.badgr.io/public/assertions/PEfl_niOScWYcAx8-nSaCA?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/PEfl_niOScWYcAx8-nSaCA/image" alt="CSS Styling Badge"/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>CSS Styling</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Jan 15, 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FPEfl_niOScWYcAx8-nSaCA%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

                <div style={badgediv}>
                    <div style={badgeImagediv}>
                     <a href="https://api.badgr.io/public/assertions/LDG-v0pnRz2Br0OFccBdgQ?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/LDG-v0pnRz2Br0OFccBdgQ/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>User Experience</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Jan 24, 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FLDG-v0pnRz2Br0OFccBdgQ%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://api.badgr.io/public/assertions/Y4xgs404T9yqgFLp2TSUlA?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/Y4xgs404T9yqgFLp2TSUlA/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>JavaScript & Front-End Development</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Feb 21, 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FY4xgs404T9yqgFLp2TSUlA%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://api.badgr.io/public/assertions/qCzrPV8DR7aJLRpQ29RZJw?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/qCzrPV8DR7aJLRpQ29RZJw/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>NodeJS and Back-End Development</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Apr 10, 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FqCzrPV8DR7aJLRpQ29RZJw%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>
                
                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://api.badgr.io/public/assertions/5rS90xJFSWa3jeedr7ww7w?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/5rS90xJFSWa3jeedr7ww7w/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>React Development</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>May 6, 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2F5rS90xJFSWa3jeedr7ww7w%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FK0gCdac0RpeQhRioH6x5VA%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/K0gCdac0RpeQhRioH6x5VA/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>Mern Stack</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>June 7th 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2F5rS90xJFSWa3jeedr7ww7w%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

                <div style={badgediv}>
                    <div style={badgeImagediv}>
                        <a href="https://api.badgr.io/public/assertions/IDQKzrTWQkizS7N6XCGOuQ?identity__email=rowens72%40yahoo.com">
                            <img width="150px" height="150px" src="https://api.badgr.io/public/assertions/IDQKzrTWQkizS7N6XCGOuQ/image" alt=""/>
                        </a>
                    </div>
                    <div style={badgeConent}><strong>Sql</strong></div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>May 20th 2022
                        </div>
                    <div style={badgeAwardedto}>
                        <strong style={strong}>
                            Awarded To:&nbsp;
                        </strong>Ron Owens
                    </div>
                    <a className="badgr-badge-verify" target="_blank" 
                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FIDQKzrTWQkizS7N6XCGOuQ%3Fidentity__email%3Drowens72%2540yahoo.com&amp;identity__email=rowens72%40yahoo.com"
                        style={verify}>
                        VERIFY
                    </a>
                </div>

            </div>
            <script async="async" src="https://badgr.com/assets/widgets.bundle.js"></script>
            </div>
        </>
    )
}


export default Badge;
