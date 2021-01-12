# Pohang Eats

The backend of Pohang Eats 

- NestJS
- React
- TypeScript
- NodeJS
- GraphQL
- Apollo
- TypeORM


### Memo
- docker run -d -p 5432:5432 --name pohang-eats -e POSTGRES_USER=jaeuk -e POSTGRES_PASSWORD=12345 postgres
- docker ps
- pgAdmin 4 / create database 'pohang-eats', user/pw setting 
- Promies
    - 잘 정리된 블로그 참조
    - https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

- async & await
    - https://joshua1988.github.io/web-development/javascript/js-async-await/

- secret genreate key
- jwt.io

- string 과 String 의 차이
    - https://stackoverrun.com/ko/q/3987420
    - 타입 강제 타입스크립트.. 몇 분을 삽질했다.. 기억하자.
```
var str: String = new String("Hello world"); // Uses the JavaScript String object
var str: string = String("Hello World"); // Uses the TypeScript string type
```

- mailgun 서비스
- receive smss 가짜 sms 인증


- rest
```
@InputType()
export class EpisodesSearchInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => Number)
  @IsNumber()
  episodeId: number;
}
//
@InputType()
export class UpdateEpisodeDto extends EpisodesSearchInput {
  @Field((_) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Field((_) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly category?: string;
}
//
return this.podcastService.updateEpisode(updateEpisodeDto);
//
  updateEpisode({
    podcastId,
    episodeId,
    ...rest // ..rest 나머지
  }: UpdateEpisodeDto): CoreOutput {
    const { podcast, error, ok } = this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    ...
```

## User Model:
- id
- createdAt
- updatedAt
- email
- password
- role(client|owner|delivery)
- verified

## User CRUD:
- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email

## Restaurant Model
- name
- category
- address
- coverImage

- Create Restaurant
- Edit Restaurant
- Delete Restaurant
- See Restaurant
- Search Restaurant

- See Categories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)

- Create Dish
- Edit Dish
- Delete Dish

## Order Model
- Orders CRUD
- Orders Subscription:
  - Pending Orders (Owner) (T: createOrder)
  - Order Status (Customer, Delivery, Owner) (T: editOrder)
  - Pending Pickup Order (Delivery)
  
- Payments (CRON)
