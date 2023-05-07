import { useState } from "react";
import axios from "axios";

export default () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);

    const subscribe = async () => {
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios.post("/api/newsletter", { email });
            setState("SUCCESS");
        } catch (e) {
            setErrorMessage(e.response.data.error);
            setState("ERROR");
        }
    };

    return (
        <section class="text-gray-600 body-font">
            <section class="relative pb-24">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h1 class="mb-5 text-5xl font-bold text-white">
                        Subscribe to our newsletter
                    </h1>
                    <h1 class="subtext mb-9 text-2xl font-semibold">
                        Enter your email address and get our newsletters straight away.
                    </h1>
                    <input
                        className="appearance-none w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md border border-gray-500 rounded py- 3px-4 text-gray-400 leading-tight focus:outline-none focus:border-gray-600 bg-black"
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className={`inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white ${state === "LOADING" ? "button-gradient-loading" : ""
                            }`}
                        type="button"
                        disabled={state === "LOADING"}
                        onClick={subscribe}
                    >
                        Subscribe
                    </button>
                    {/* </div> */}
                    {state === "ERROR" && (
                        <p className="justify-center w-4/5 mt-2 text-red-600">{errorMessage}</p>
                    )}
                    {state === "SUCCESS" && (
                        <p className="w-4/5 mt-2 text-green-600">Success!</p>
                    )}
                </div>
            </section>
        </section>
    );
};