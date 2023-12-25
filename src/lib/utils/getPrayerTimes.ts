type APIResponse = {
  code: boolean;
  status: string;
  data: {
    timings: Record<string, string>;
    date: {
      readable: string;
      timestamp: string;
      hijri: {
        date: string;
        format: string;
        day: string;
        weekday: { en: string; ar: string };
        year: string;
      };
    };
  };
};

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

const newdate = day + "-" + month + "-" + year;

const API_URL = `https://api.aladhan.com/v1/timingsByCity/${newdate}?city=kitchener&country=canada`;

const getPrayerTimes = async (): Promise<APIResponse> => {
  const req = await fetch(API_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "2296de61b2msh523219104462259p1f1c57jsn676066c6b22c",
      "X-RapidAPI-Host": "aladhan.p.rapidapi.com",
    },
  });

  const response = await req.json();

  return response as APIResponse;
};

export default getPrayerTimes;
