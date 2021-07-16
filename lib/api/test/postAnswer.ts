import axios from 'axios';
const baseURL = 'https://colfume.co.kr/api';

export async function testResult(answer) {
  try {
    const { data } = await axios.post(`${baseURL}/colfume/test`, answer);
    console.log('[success] post answer', data);
    return data.data;
  } catch (error) {
    console.error('Test Result Error', error);
  }
}


// const testResult = async answer => {
//   try {
//     const { data } = await axios.post(`${baseURL}/colfume/test`, answer);
//     console.log('[SUCCESS] post answer', data);
//     return data.data;
//   } catch (e) {
//     console.log('[FAIL] post answer', e);
//     return e;
//   }
// };

// export default testResult;
