class Api::V1::NotesController < ApplicationController

  def create
    @note = Note.new
    @note.user = current_user
    note_info = JSON.parse(request.body.read)
    @note.title = note_info["title"]
    @note.body = note_info["body"]
    @note.save
  end

  def index
    @notes = Note.all.order("created_at desc")
    render :json => { :notes => @notes }
  end

  def show
    @note = Note.find(params[:id])
    render :json => { :items => @note.items }
  end

  # def update
  #   @song = Song.find(params[:id])
  #   @song.tab = JSON.parse(request.body.read)["tab"]
  #   @song.save
  #   render json: @song
  # end

end
