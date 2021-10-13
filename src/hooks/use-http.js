import { useState, useEffect } from 'react';
import axios from 'axios';
const asyncDbCall = async (url, method = 'get', config, cb) => {
	const res = await axios[method](url, config);
	cb(res.data);
};
const useHttp = (url, method, config) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		try {
			asyncDbCall(url, method, config, setData);
		} catch (error) {
			console.log(error);
		}
	}, [url, config, method]);
	return data;
};

export default useHttp;
