import CallAPIView from "./CallAPIView";
import Cookies from 'js-cookie';

export default function SuccessView(props: { userId: string }) {
    let userId = props.userId;
// const [cookieToken, setCookieToken] = useState(Cookies.get("sIRTFrontend"))
    // console.log('cookieToken',cookieToken)

    // useEffect(() => {
    //     if(Cookies.get("sIRTFrontend") !== "remove"){
    //         setCookieToken(Cookies.get("sIRTFrontend"))
    //     }
        
    // },[Cookies])
    
    return (
        <div
            className="fill"
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333333",
                paddingTop: "10px",
                paddingBottom: "40px",
            }}>
            {/* <div style={{paddingTop:"90px"}}>
                <div style={{color: "black", textAlign:"center"}}>Token:</div>
                <div style={{color: "green", textAlign: "center", border: "1px solid gray", width:"fit-content", margin: "auto",padding: "8px",borderRadius:"10px"}}> {cookieToken}</div>
            </div> */}
            <span
                style={{
                    fontSize: "50px",
                }}>
                🥳🎉
            </span>
            Login successful
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            Your user ID is
            <div />
            {userId}
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <CallAPIView />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            ------------------------------------
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <a
                href="https://github.com/supertokens/supertokens-auth-react/tree/master/examples/with-thirdparty"
                target="_blank"
                rel="noreferrer">
                View the code on GitHub
            </a>
        </div>
    );
}
