# SpeakHer Backend

This project is the backend for https://speakher.jp. This project contains is a Ruby on Rails API app, serving REST endpoints to fetch and manipulate the data.

Specs:
- Web server: Puma (default for Rails apps)
- Database: SQLite (default for Rails apps)
- Architecture: MVC, where Views are the API response templates (JSON)

If you're new to Ruby on Rails, here's some useful reading to get started (you can ignore most parts related to `views` and ERB files, since this is an API only app):
- [Standard folder structure of a Rails app](https://guides.rubyonrails.org/getting_started.html#creating-the-blog-application)
- [Rails routes and controllers](https://guides.rubyonrails.org/getting_started.html#say-hello-rails)
- [Rails models and database](https://guides.rubyonrails.org/getting_started.html#mvc-and-you)
- [Rails CRUD and REST API](https://guides.rubyonrails.org/getting_started.html#crudit-where-crudit-is-due)

## Local setup

System dependencies:
- [ruby 2.6.3](https://www.ruby-lang.org/en/downloads/releases/) ([rbenv](https://github.com/rbenv/rbenv) is recommended to install and manage ruby versions)
- [Bundler](https://bundler.io/) (`$ gem install bundler`)
- Some gems on Gemfile may require extra dependencies. If you run into any errors when running `bundle install` below, follow the instructions on the error messages to install the missing dependencies

Setup the app on your local environment:
1. Clone the project or your fork of the project on your local machine
2. Install the dependencies
```
$ cd speak-her-db/server
$ bundle install
```
3. Setup and seed the database. This will seed the database with the core data like Locations, Languages and Topics.
```
$ rails db:create db:migrate db:seed
```
4. If you need, you may populate the database with a fake list of speakers
```
$ rake mock:speakers
```
5. Run the rails server
```
$ rails s
```

## Database manipulation

If you need to reset your database from scratch, you can always run
```
$ rails db:drop db:create db:migrate db:seed
```

**Don't ever run this command in production.**

As a general rule **do not edit existing DB migrations** (under `db/migrations`). Migrations are a registry of how we altered the database **over time**, which means that each migration represents a state/version of the database schema at some point in time and should not be altered.

Rails also keep a pointer to the last migration you ran, so when you pull the project and there are new migrations, you should run `rails db:migrate` to apply **the new migrations**. That's also why if there is a change on an old migration that was already executed, it **will not be applied** when you run `rails db:migrate`, unless you drop your database and recreate it from scratch.

To alter the database schema in any way (create or alter tables, create indexes, etc) you must create a new migration with the changes you need. [Read more about Rails migrations on RailsGuides](https://guides.rubyonrails.org/active_record_migrations.html).

### Checking or updating the seed data

You can re-seed the core data (Languages, Topics, Locations) at any time running
```
$ rails db:seed
```
This command will load the json files on the `db` folder and either create the records if they don't exist yet or update the attributes if the record already exists (find by name match). You can check or update the behavior of this task on [db/seeds.rb](db/seeds.rb).

To add a fake list of speakers, you can use the mock speakers rake task:
```
$ rake mock:speakers
```
You can check or update the behavior of this task on [lib/tasks/mock_data.rake](lib/tasks/mock_data.rake). You can change the mock data on [lib/tasks/speakers.json](lib/tasks/speakers.json)

### Checking or updating records using the Rails console

Access the rails console
```
$ rails c
Running via Spring preloader in process 86090
Loading development environment (Rails 6.0.3.2)
irb(main):001:0>
```

The Rails console is basically a ruby console loaded with your development environment (classes, models, db connection), so you basically run any Rails code from there. For example, you can manipulate your data using your models and ActiveRecord methods:
```ruby
irb(main):001:0> Topic.count
=> 47
irb(main):002:0> Topic.create!(name: "My new topic")
=> #<Topic id: 48, name: "My new topic", name_ja: nil, created_at: "2021-01-01 11:12:24", updated_at: "2021-01-01 11:12:24">
irb(main):003:0> Topic.count
=> 48
irb(main):004:0> Topic.last
=> #<Topic id: 48, name: "My new topic", name_ja: nil, created_at: "2021-01-01 11:12:24", updated_at: "2021-01-01 11:12:24">
```
You can check how to use the [basic ActiveRecord CRUD methods on RailsGuides](https://guides.rubyonrails.org/active_record_basics.html#crud-reading-and-writing-data).

## Cheking & updating API endpoints

Check the API routes typing this command on your terminal
```
$ rails routes
```

Alternatively, when your server is running, you can see all available routes at `localhost:3000/rails/info/routes`. Response formats are under the `/views` folder. More info:
- [RailsGuides about Routes](https://guides.rubyonrails.org/routing.html)
- [Building JSON responses with JBuilder](https://github.com/rails/jbuilder)

## Writing & running tests

Rails apps come built-in with Minitest. If you're new to Rails or testing, read the [RailsGuides for Testing Rails Apps](https://guides.rubyonrails.org/testing.html).

All tests are under the `test` folder. You can also check and update mock test data under `test/fixtures`.

Run tests locally with the following commands:
```
$ rails test ==> run all tests
$ rails test [filepath] ==> run a specific test file
$ rails test [filepath:line_number] ==> run a specific test case defined at line_number of the file
```

## How to deploy

WIP
