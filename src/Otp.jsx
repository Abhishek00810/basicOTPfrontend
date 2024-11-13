import { useRef,useState } from "react";
import Button from "./button";

function Otp()
{
    const inputrefs = useRef([]);
    const [disable, setdisable] = useState(true);
    const [values, setValues] = useState(Array(6).fill(""));
    function handleChange(e,i)
    {

        const input = e.target.value;
        const isEvenDigit = /^[0123456789]$/.test(input);

        // If it's not an even digit, exit the function
        if (!isEvenDigit && input !== "") {
            e.target.value = ""; 
            return;
        }
        
        const newvalues = [...values];
        newvalues[i] = e.target.value;
        setValues(newvalues);
        if(i==inputrefs.current.length-1 )
            {
                setdisable(false);
            }
        if(e.target.value.length == 1 && i<inputrefs.current.length-1)
        {
            console.log("HEY");
            inputrefs.current[i+1].focus();
        }
        else if (e.target.value.length === 0 && i>0) {
            console.log("HEY1");
            inputrefs.current[i-1].focus();
            setdisable(true);
        }
        console.log(i);
    }

    function Previous(e, i)
    {
        const input = e.key;
        const isDigit = /^[0123456789]$/.test(input);
        console.log(isDigit)
        if(values[i]!="" && isDigit && i<inputrefs.current.length-1)
        {
            console.log("HEY");
            inputrefs.current[i+1].focus();
        }
        if(values[i]==="" && e.key === "Backspace" && i>0)
        {
            inputrefs.current[i-1].focus();
        }
        
    }

    function PreOtp() {
        const otpInputs = [];
        for (let i = 0; i < 6; i++) {
            otpInputs.push(
                <input
                    key={i}
                    type="text"
                    maxLength="1"
                    value={values[i]} // Each input uses its respective value
                    onChange={(e) => handleChange(e, i)} // Pass index `i` to handleChange
                    onKeyDown={(e)=>Previous(e, i)}
                    ref={(el) => (inputrefs.current[i] = el)} // Set the ref for each input
                    className="w-10 m-1 text-center py-3 px-2 outline-none rounded-xl bg-[#18395F] text-white"
                />
            );
        }
        return <div className="flex justify-center mb-6">{otpInputs}</div>;
    }
    return (
        <div className="bg-[#00274E] min-h-screen flex items-start justify-center">
            <div className="flex-col text-center mt-40">
            <h1 className="text-white font-bold text-2xl mb-10">Check your email for a code</h1>
            <h3 className="mb-4 text-white"> Please enter the verification code sent to abhishekdadwal007@gmail.com</h3>
            {PreOtp()}
            <Button disabled={disable} children={"Verify"}></Button>
            </div>

        </div>
    );
}

export default Otp;