@extends('layouts.app')

@section('title', 'Modifier une tâche')

@section('content')

    <div class="row justify-content-center">
    <div class="col-md-6">
        <form action="{{ route('tasks.update', $task->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" name="title" class="form-control" value="{{ $task->title }}">
                @error('title')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" class="form-control">{{ $task->description }}</textarea>
                @error('description')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" value="{{ $task->email }}">
                @error('email')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="phone_number">Numéro de téléphone</label>
                <input type="text" name="phone_number" class="form-control" value="{{ $task->phone_number }}">
                @error('phone_number')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <label for="reminder_time">Programmée à</label>
                <input type="datetime-local" name="reminder_time" class="form-control" value="{{ $task->reminder_time }}">
                @error('reminder_time')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <button type="submit" class="btn btn-primary mt-5">Modifier</button>
        </form>
    </div>
    </div>

@endsection
