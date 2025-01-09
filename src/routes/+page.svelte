<script lang="ts">
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import WorkoutForm from "$lib/containers/forms/workout.svelte";
    import type { PageData } from './$types';
</script>
<div class="md:container relative">
    <Card class="md:mx-20">
        <CardHeader>
        <CardTitle>Enter details the for your workout</CardTitle>
        <CardDescription>
            This is a description
        </CardDescription>
        </CardHeader>
        <CardContent>
            <WorkoutForm />
        </CardContent>
    </Card>
</div>