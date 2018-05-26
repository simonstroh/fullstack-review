const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  name: String,
  full_name: String,
  owner: {},
  private: Boolean,
  html_url: String,
  description: String,
  fork: Boolean,
  url: String,
  forks_url: String,
  keys_url: String,
  collaborators_url: String,
  teams_url: String,
  hooks_url: String,
  issue_events_url: String,
  events_url: String,
  assignees_url: String,
  branches_url: String,
  tags_url: String,
  blobs_url: String,
  git_tags_url: String,
  git_refs_url: String,
  trees_url: String,
  statuses_url: String,
  languages_url: String,
  stargazers_url: String,
  contributors_url: String,
  subscribers_url: String,
  subscription_url: String,
  commits_url: String,
  git_commits_url: String,
  comments_url: String,
  issue_comment_url: String,
  contents_url: String,
  compare_url: String,
  merges_url: String,
  archive_url: String,
  downloads_url: String,
  issues_url: String,
  pulls_url: String,
  milestones_url: String,
  notifications_url: String,
  labels_url: String,
  releases_url: String,
  deployments_url: String,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date,
  git_url: String,
  ssh_url: String,
  clone_url: String,
  svn_url: String,
  homepage: { type: String, required: false },
  size: Number,
  stargazers_count: Number,
  watchers_count: Number,
  language: String,
  has_issues: Boolean,
  has_projects: Boolean,
  has_downloads: Boolean,
  has_wiki: Boolean,
  has_pages: Boolean,
  forks_count: Number,
  mirror_url: { type: String, required: false },
  archived: Boolean,
  open_issues_count: Number,
  license: { type: String, required: false },
  forks: Number,
  open_issues: Number,
  watchers: Number,
  default_branch: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  var newRepo = new Repo(repo)
  newRepo.save(function(error, newRepo) {
    if (error) console.log(error)
    console.log("New Repo\n", newRepo)
  })
}

module.exports.save = save;
module.exports.repo = Repo
module.exports.connection = mongoose.connection
