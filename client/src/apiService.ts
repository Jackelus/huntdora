import { reedAPI } from './apiCall';
import { Job } from './app-types'

export async function getData(jobId: number | null, searchQuery: string | null): Promise<any> {
  console.log('API CALL received:', jobId, searchQuery);
  return jobId !== null ?
    await apiCall(`/jobs/${jobId}`) :
    await apiCall(`/search?keywords=${searchQuery}`);
}

/**
 * Look at axios cancel token
 * documentation for better request management
 */
export async function apiCall(

  path: string
): Promise<Job | Job[]> {
  let jobs: Job | Job[] = [];

  try {
    const { data } = await reedAPI.get(path);
    console.log("Fetched", data)

    if (data.results) {
      jobs = data.results.map((job: any) => Job.parse(job))
    } else {
      jobs = Job.parse(data);
    }
    console.log("Data has been transformed!", jobs)
    return jobs;
  } catch (error) {
    console.log('Error fetching!', error);
    return jobs;
  }
}




