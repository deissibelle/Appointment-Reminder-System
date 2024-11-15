@extends('layouts.app')

@section('title', 'Task List')

@section('content')
<div class="row">
    <div class="col-md-12">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
    </div>
</div>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="h1">
            Liste des tâches
        </div>
        <div class="row">
            <div class="col-md-12">
                <a href="{{ route('tasks.create') }}" class="btn btn-primary">Ajouter une tâche</a>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Programmée à</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($tasks as $task)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $task->title }}</td>
                            <td>{{ $task->description }}</td>
                            <td>{{ $task->reminder_time }}</td>
                            <td>
                                <a href="{{ route('tasks.edit', $task->id) }}" class="btn btn-primary">Modifier</a>
                                <a href="{{ route('tasks.destroy', $task->id) }}" class="btn btn-danger">Supprimer</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
