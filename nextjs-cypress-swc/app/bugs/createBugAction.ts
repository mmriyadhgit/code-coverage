'use server';

import { cookies } from 'next/headers'

const createBugAction = () => {
  console.log(`createBugAction`);
  cookies().set('action', 'createBugAction');
}

export default createBugAction