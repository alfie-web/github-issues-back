import axios from '../core/axios.js'

const githubService = {
   getAllIssues: ({ userName, repoName, page = 1, sortField, sortDirection }) =>
      axios.get(
         `/repos/${userName}/${repoName}/issues?per_page=30&page=${page}&state=${sortField}&direction=${sortDirection}`
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