# Insira aqui as query utilizadas

## Todas as agendas

```sql
select * from schedules;
```

## Todas as agendas com a tag "Dev"

```sql
select schedules.* from schedules
join schedule_tags on schedules.id = schedule_tags.schedule_id
join tags on schedule_tags.tag_id = tags.id
where tags.title = 'Dev';
```

## Todas as agendas que acontecerão no dia 10 de maio

```sql
select * from schedules
where start_time between '2023-05-10 00:00:00' and '2023-05-10 23:59:59'
and end_time between '2023-05-10 00:00:00' and '2023-05-10 23:59:59';
```

## Todas as agendas que o usuário Luís participou

```sql
select schedules.* from schedules
join schedule_users on schedules.id = schedule_users.schedule_id
join users on schedule_users.user_id = users.id
where users.first_name = 'Luís';
```
