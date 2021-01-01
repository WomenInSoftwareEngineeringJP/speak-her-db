# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_12_172723) do

  create_table "languages", force: :cascade do |t|
    t.string "name"
    t.string "name_ja"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "languages_speakers", id: false, force: :cascade do |t|
    t.integer "speaker_id", null: false
    t.integer "language_id", null: false
    t.index ["language_id"], name: "index_languages_speakers_on_language_id"
    t.index ["speaker_id"], name: "index_languages_speakers_on_speaker_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "code"
    t.string "prefecture"
    t.string "region"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "speakers", force: :cascade do |t|
    t.string "name_en"
    t.string "name_ja"
    t.string "pronouns"
    t.string "email"
    t.string "city"
    t.integer "location_id"
    t.string "job_title"
    t.string "company"
    t.string "secondary_title"
    t.string "secondary_affiliation"
    t.string "speaker_bio"
    t.string "twitter_url"
    t.string "website_url"
    t.string "facebook_url"
    t.string "photo_url"
    t.string "linkedin_url"
    t.string "prior_presentation_url"
    t.string "submitter_name"
    t.string "submitter_email"
    t.string "admin_notes"
    t.boolean "consent", default: true
    t.boolean "published", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_speakers_on_location_id"
  end

  create_table "speakers_topics", id: false, force: :cascade do |t|
    t.integer "speaker_id", null: false
    t.integer "topic_id", null: false
    t.index ["speaker_id"], name: "index_speakers_topics_on_speaker_id"
    t.index ["topic_id"], name: "index_speakers_topics_on_topic_id"
  end

  create_table "topics", force: :cascade do |t|
    t.string "name"
    t.string "name_ja"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
