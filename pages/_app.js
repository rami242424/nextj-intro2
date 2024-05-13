// 청사진처럼 제일 먼저 확인되는 컴포넌트이다.
// 기본형태
// export default function App({ Component, pageProps }){ // -> Component : 렌더링하길 원하는 페이지
//     return <Component {...pageProps} />
// }

import "../styles/globals.css";
import Layout from "@/components/Layout";

export default function App({Component, pageProps}){
    return(
        <Layout>
            <Component {...pageProps} />
            
        </Layout>
    );
}