import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface ForumPost {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([
    {
      id: 1,
      author: 'Иван Рыбаков',
      title: 'Отличный улов на Волге',
      content: 'Вчера поймал щуку на 5 кг! Использовал воблер Rapala. Погода была отличная, ветер слабый.',
      likes: 12,
      replies: 5,
      timestamp: '2 часа назад'
    },
    {
      id: 2,
      author: 'Сергей Озерный',
      title: 'Лучшие снасти для карпа',
      content: 'Друзья, поделюсь своим опытом ловли карпа. Лучше всего работают бойлы с ароматом клубники.',
      likes: 8,
      replies: 3,
      timestamp: '5 часов назад'
    },
    {
      id: 3,
      author: 'Алексей Удочкин',
      title: 'Секреты зимней рыбалки',
      content: 'Зимой важно правильно выбрать место. Ищите участки с перепадами глубин и коряжником.',
      likes: 15,
      replies: 8,
      timestamp: '1 день назад'
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const post: ForumPost = {
        id: forumPosts.length + 1,
        author: 'Новый участник',
        title: newPost.title,
        content: newPost.content,
        likes: 0,
        replies: 0,
        timestamp: 'только что'
      };
      setForumPosts([post, ...forumPosts]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleLike = (id: number) => {
    setForumPosts(forumPosts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Fish" size={32} className="text-primary-foreground" />
              <h1 className="text-2xl font-bold">РыбацкийПортал</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Снасти', 'Водоемы', 'Советы', 'Отчеты', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="hover:text-accent transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="secondary" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'главная' || activeSection === 'home' ? (
        <>
          <section className="relative h-[500px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/df696b9e-6b46-4a72-830f-041f0e2d2d72/files/9073995c-4eec-4517-826a-d9f583e2e586.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/40" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Добро пожаловать в мир рыбалки
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Делитесь опытом, находите лучшие места и снасти, общайтесь с единомышленниками
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Присоединиться к сообществу
              </Button>
            </div>
          </section>

          <section className="py-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="Package" size={32} className="text-secondary-foreground" />
                  </div>
                  <CardTitle>Снасти</CardTitle>
                  <CardDescription>
                    Полный каталог снастей и оборудования для любого вида рыбалки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://cdn.poehali.dev/projects/df696b9e-6b46-4a72-830f-041f0e2d2d72/files/99ca575b-77e2-4eaa-ae10-dde1c952c345.jpg"
                    alt="Снасти"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="Waves" size={32} className="text-secondary-foreground" />
                  </div>
                  <CardTitle>Водоемы</CardTitle>
                  <CardDescription>
                    Лучшие места для рыбалки с описанием и отзывами рыбаков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://cdn.poehali.dev/projects/df696b9e-6b46-4a72-830f-041f0e2d2d72/files/0bf34465-649c-4275-9ba5-8c20e66e2b4d.jpg"
                    alt="Водоемы"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={32} className="text-secondary-foreground" />
                  </div>
                  <CardTitle>Советы</CardTitle>
                  <CardDescription>
                    Профессиональные советы и хитрости от опытных рыболовов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Выбор места для рыбалки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Подготовка снастей</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Техника заброса</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Сезонные особенности</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-center mb-8">Форум рыболовов</h2>
              
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="posts">Обсуждения</TabsTrigger>
                  <TabsTrigger value="create">Создать пост</TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="space-y-4">
                  {forumPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                              <Icon name="User" size={20} className="text-secondary-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{post.title}</CardTitle>
                              <CardDescription>
                                {post.author} • {post.timestamp}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            <Icon name="MessageSquare" size={14} className="mr-1" />
                            {post.replies}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{post.content}</p>
                        <div className="flex gap-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className="gap-2"
                          >
                            <Icon name="ThumbsUp" size={16} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="MessageCircle" size={16} />
                            Ответить
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="Share2" size={16} />
                            Поделиться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="create">
                  <Card>
                    <CardHeader>
                      <CardTitle>Создать новый пост</CardTitle>
                      <CardDescription>
                        Поделитесь своим опытом с рыболовным сообществом
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Заголовок</label>
                        <Input 
                          placeholder="О чем вы хотите рассказать?"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Содержание</label>
                        <Textarea 
                          placeholder="Расскажите подробнее..."
                          rows={6}
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        />
                      </div>
                      <Button onClick={handleAddPost} className="w-full">
                        <Icon name="Send" size={16} className="mr-2" />
                        Опубликовать
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </>
      ) : (
        <section className="py-16 container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Раздел "{activeSection}"</CardTitle>
              <CardDescription>
                Этот раздел находится в разработке
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Скоро здесь появится интересный контент о рыбалке!
              </p>
            </CardContent>
          </Card>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О портале</h3>
              <p className="text-sm opacity-90">
                Крупнейшее сообщество рыболовов России. Делитесь опытом и находите новых друзей.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li>Снасти</li>
                <li>Водоемы</li>
                <li>Советы</li>
                <li>Отчеты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm">
                <li>Форум</li>
                <li>Правила</li>
                <li>FAQ</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Связь</h3>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="secondary" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="secondary" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
            © 2024 РыбацкийПортал. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
