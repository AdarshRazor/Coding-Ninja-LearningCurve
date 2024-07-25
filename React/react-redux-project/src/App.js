import './App.css';
import Bal from './components/Bal';
import But from './components/But';
import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
    <Bal/>
    <But/>
    <Marquee className="my-5" style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>                                    This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee className="my-5" style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>              This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee className="my-5" style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>                               This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>                                    This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    <Marquee className="my-5" style={{color: 'red', fontSize: '1.3rem', fontWeight: '700'}}>
      <pre>              This      is      a      dark      web      bank.      Please      don't      trust      what      you      see      and      dont      see      what      you      dont      trust.      -----</pre>
    </Marquee>
    </>
  );
}

export default App;
