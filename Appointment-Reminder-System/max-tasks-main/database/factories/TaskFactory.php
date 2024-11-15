<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => "Aller au super marché",
            'description' => "Je dois acheter des oeufs, du lait et des pain",
            'reminder_time' => fake()->dateTimeBetween('now', '+1 minute'),
            'email' => 'maximilienapoba50@gmail.com',
            'phone_number' => "+237679951841",
        ];
    }
}
