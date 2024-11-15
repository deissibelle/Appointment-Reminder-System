@extends('layouts.app')

@section('title', 'Détails de la tâche')

@section('content')
    <div class="row justify-content-center">
        <div class="row">
            <div class="col-md-6">
            <h1>{{ $task->title }}</h1>
            <p>{{ $task->description }}</p>
            <p>{{ $task->reminder_time }}</p>
            <p>{{ $task->email }}</p>
            <p>{{ $task->phone_number }}</p>
        </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <a href="{{ route('tasks.edit', $task->id) }}" class="btn btn-primary">Modifier</a>
            </div>
            <div class="col-md-6">
                <form action="{{ route('tasks.destroy', $task->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Supprimer</button>
                </form>
            </div>
        </div>
    </div>
@endsection
