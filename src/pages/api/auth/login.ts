import { NextApiRequest, NextApiResponse } from 'next';
import { CLIENT_ID } from '@/utils/auth/server';
import { getAbsoluteUrl } from '@/utils/get-absolute-url';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { locale } = req.query as {
    locale?: string;
  };

  const url =
    'https://discord.com/api/oauth2/authorize?' +
    new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: `https://discord.com/oauth2/authorize?client_id=1290328015821082654&permissions=8&integration_type=0&scope=bot`,
      response_type: 'code',
      scope: 'identify guilds',
      state: locale ?? '',
    });

  res.redirect(302, url);
}
