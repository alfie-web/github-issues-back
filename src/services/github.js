import axios from '../core/axios.js'

const githubService = {
   getAllIssues: ({ userName, repoName, page = 1 }) =>
      axios.get(
         `/repos/${userName}/${repoName}/issues?per_page=30&page=${page}`
      ),

   getIssueByNumber: ({ userName, repoName, number }) => 
      axios.get(
         `/repos/${userName}/${repoName}/issues/${number}`
      ),
   
   getRepositoryByName: ({ userName, repoName }) => 
      axios.get(
         `/repos/${userName}/${repoName}`
      ),
}

export default githubService